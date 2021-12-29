import React from 'react'
import './App.less'

import SuperSwiper from 'super-swiper'
export default class App extends React.Component {
  superSwiper: SuperSwiper | undefined
  data: any = [
    { title: 'pic00', url: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png' },
    { title: 'pic01', url: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png' },
    { title: 'pic02', url: 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png' },
    { title: 'pic03', url: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png' },
    { title: 'pic04', url: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png' },
    { title: 'pic05', url: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png' },
    { title: 'pic06', url: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png' },
    { title: 'pic07', url: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png' },
    { title: 'pic08', url: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png' },
    { title: 'pic09', url: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png' },
    { title: 'pic10', url: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png' },
    { title: 'pic11', url: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png' },
  ]
  Color = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return 'rgba(' + r + ',' + g + ',' + b + ',1)'
  }
  componentDidMount() {
    // 可用户自己定义滚动
    // setInterval(() => {
    //   this.superSwiper?.MoveItem(true)
    // }, 800)
  }
  render(): JSX.Element {
    return (
      <div>
        <SuperSwiper
          onRef={(ref: any) => {
            this.superSwiper = ref
          }}
          onClickItem={(e: number) => {
            console.log(e)
          }}
          className="superContainer"
          layout="horizontal"
          auto={true}
          option={{
            speed: 'slow',
            show_num: 4,
            // aspect_ratio: ['0.8,0.4', '0.9,0.5'],纵横比例
            aspect_ratio: ['0.4,0.8', '0.5,0.9'],
            card_size: { w: 200, h: 200 },
            n_sing: { n0: 1.6, n1: 0.7 },
            // n_sing: { n0: 1.8, n1: 0.8 }, ///两端隐藏不过见
            spacing: 6,
          }}
          data={this.data}
          // count={120} 可用于自定义渲染时只告诉组件要渲染的数量
        ></SuperSwiper>
        <SuperSwiper
          custom_render={(index: number): any => {
            return (
              <div
                className="item-wrapper-custom"
                style={{ backgroundColor: this.Color() }}
                onClick={(e) => {
                  console.log(index)
                }}
              >
                {index}
              </div>
            )
          }}
          auto={true}
          direction="Perv"
          className="superContainer01"
          layout="vertical"
          option={{
            speed: 'slow',
            show_num: 3,
            aspect_ratio: ['0.8,0.4', '0.9,0.5'],
            card_size: { w: 200, h: 200 },
            n_sing: { n0: 1.8, n1: 0.8 },
            spacing: 6,
          }}
          count={120}
        ></SuperSwiper>
      </div>
    )
  }
}
