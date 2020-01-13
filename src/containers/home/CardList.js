import React from 'react';
import { Layout, Row, Col } from 'antd';
import Card from '../../components/Card';


const messageCards = [
  {
    backgroundColor: '#29b6f6',
    icon: 'icon-icon-article',
    topMessage: '共发表了',
    middleMessage: '0',
    bottomMessage: '篇文章',
    to: 'articleManage'
  },
  {
    backgroundColor: '#7e57c2',
    icon: 'icon-icon_drafts',
    topMessage: '草稿箱共有',
    middleMessage: '0',
    bottomMessage: '篇文章',
    to: 'articleDrafts'
  },
  {
    backgroundColor: '#33b86c',
    icon: 'icon-delete',
    topMessage: '垃圾箱共有',
    middleMessage: '0',
    bottomMessage: '篇文章',
    to: 'articleDeleted'
  },
  {
    backgroundColor: '#6e8cd7',
    icon: 'icon-icon-tagso',
    topMessage: '共有',
    middleMessage: '0',
    bottomMessage: '个分类/标签',
    to: 'adminCategories'
  },
]

const CardList = () => {
  return (
    <Row gutter={16}>
      {
        messageCards.map((card, index) => {
          return (
            <Col span={6} key={index}>
              <Card {...card} />
            </Col>
          )
        })
      }
    </Row>
  )
}

export default CardList;
