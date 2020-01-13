import {action, observable} from 'mobx';
import { message } from 'antd';
import request from '../../../utils/request';



class Article {
  @observable token = '';
  @observable articleInfo = {
    poster: '',
    content: '',
    title: '',
    description: '',
  };

  //
  @action.bound setArticleInfo(key, value) {
    this.articleInfo = {
      ...this.articleInfo,
      [key]: value
    }
  }

  @action.bound async getToken() {
     const { token } = await request.get('/upload/getToken');
     this.token = token;
  }

  @action.bound async getImageUrl(key) {
    const { imgUrl } = await request.get('/upload/getImgUrl', { params: { key } });
    this.setArticleInfo('poster', imgUrl);
  }

  @action.bound async save() {
    const saveInfo = {
      ...this.articleInfo,
      tags: 'node,egg',
      category: '技术',
      type: 1,
    }

    await request.post('/article', saveInfo);
    message.success('保存成功', 2);
  }

  @action.bound async publish() {
    const saveInfo = {
      ...this.articleInfo,
      tags: 'node,egg',
      category: '技术',
      type: 2,
    }

    await request.post('/article', saveInfo);
    message.success('发布成功', 2);
  }

  @action.bound async getArticles() {
    const result = await request.get('/article');
    console.log(result);
  }
}

export default new Article();
