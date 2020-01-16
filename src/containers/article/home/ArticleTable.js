import React from 'react';
import { observer } from 'mobx-react-lite';
import { Table, Tag, Popconfirm } from 'antd';
import { useArticleStore } from '../../../utils';

import './ArticleTable.less';


const getColumns = () => {
  const editStore = useArticleStore();
  const { deleteArticle } = editStore;
  return [
    {
      title: '序号',
      dataIndex: 'id',
      rowKey: 'id',
      render(text, record, index) {
        return index + 1
      }
    },
    {
      title: '标题',
      rowKey: 'title',
      ellipsis: true,
      dataIndex: 'title',
    },
    {
      title: '归档',
      rowKey: 'category',
      dataIndex: 'category',
    },
    {
      title: '标签',
      rowKey: 'tags',
      dataIndex: 'tags',
      render(text) {
        return text.replace(',', ' ')
      }
    },
    {
      title: '状态',
      rowKey: 'status',
      dataIndex: 'status',
      render(text) {
        if (text === 0) {
          return <Tag color="red">未保存</Tag>
        }

        if (text === 1) {
          return <Tag color="blue">待发布</Tag>
        }

        if (text === 2) {
          return <Tag color="green">已发布</Tag>
        }

        return null
      }
    },
    {
      title: '操作',
      rowKey: 'articleid',
      dataIndex: 'articleid',
      align: 'right',
      render(text, record, index) {
        const { status, id } = record;
        return (
          <div className="opration">
            <Popconfirm
              title="确定删除？"
              cancelText="取消"
              okText="确定"
              onConfirm={() => { deleteArticle(id, index) }}
            >
              <a>删除</a>
            </Popconfirm>
            <a>编辑</a>
            {
              status === 0 &&
              <a>保存</a>
            }
            {
              status === 1 &&
              <a>发布</a>
            }
          </div>
        )
      }
    },
  ]
}


const ArticleTable = () => {
  const editStore = useArticleStore();
  const { articles } = editStore;
  return (
    <Table
      dataSource={Array.from(articles)}
      columns={getColumns()}
    />
  )
}

export default observer(ArticleTable);
