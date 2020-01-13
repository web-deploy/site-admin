import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Layout, Col, Upload, Input, message, Button } from 'antd';
import Icon from '../../../components/Icon';
import { useArticleStore } from '../../../utils';

import './ArticleDescInfo.less';

const { TextArea } = Input;


const ArticleDescInfo = () => {

  const [loading, setLoading] = useState(false);
  const editStore = useArticleStore();

  const { getToken, token, articleInfo, setArticleInfo, getImageUrl, save, publish } = editStore;
  const { poster } = articleInfo;

  const deleteImg = () => {
    setArticleInfo('poster', '');
  }

  const beforeUpload = async (file) => {
    const fileType = [
      'image/jpeg',
      'image/png',
    ]

    const isTypeCorrect = fileType.includes(file.type);
    const isLt2M = file.size / 1024 / 1024 < 2

    if (!isTypeCorrect) {
      message.error('只限jpg、png格式', 2);
      return false;
    }

    if (!isLt2M) {
      message.error('图片需小于2MB', 2);
      return false;
    }

    setLoading(true);

    await getToken();

    if(!editStore.token) {
      message.error('获取token失败，请重试', 2);
      return false;
    }


    return true;
  }

  const handleChange = async (info) => {
    const { status, response } = info.file;
    if (status === 'done') {
      await getImageUrl(response.key);
      setLoading(false);
    }
  }

  return (
    <Col span={4}>
      <Layout className="desc-info-wrap">
        {
          poster ?
            (
              <div className="img-wrap">
                <img src={poster} />
                <div className="delete-img">
                  <Icon
                    type="icon-delete"
                    size={24}
                    color="rgba(0, 0, 0, 0.65)"
                    onClick={deleteImg}
                  />
                </div>
              </div>
            ) :
            <Upload
              data={{token}}
              showUploadList={false}
              action="https://upload-z1.qiniup.com/"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              <div
                className="upload-wrap">
                <Icon type={loading ? 'loading' : 'icon-cloudupload'} size={24} color="#ffffff" />
                <div className="ant-upload-text">上传文章封面图</div>
              </div>
            </Upload>
        }
        <Input
          className="article-input"
          placeholder="请输入文章标题"
          onChange={(e) => { setArticleInfo('title', e.target.value) }}
        />
        <TextArea
          className="article-desc"
          rows={5}
          placeholder="请输入文章描述"
          onChange={(e) => { setArticleInfo('description', e.target.value) }}
        />
        <Layout className="button-wrap">
          <Button type="primary" onClick={save}>保存</Button>
          <Button type="primary" onClick={publish}>发布</Button>
        </Layout>
      </Layout>
    </Col>
  )
}

export default observer(ArticleDescInfo);
