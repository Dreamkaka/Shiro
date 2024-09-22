'use client'

import React, { useEffect, useState } from 'react'

const VoyagerDistance: React.FC = () => {
  const [distance, setDistance] = useState<number>(0)
  const [astronomicalUnits, setAstronomicalUnits] = useState<number>(0)

  // 旅行者1号开始计算的时间
  const start = new Date('1997-09-05T00:00:00Z')

  const calculateDistance = () => {
    const now = new Date()
    // 计算距离
    const dis = Math.trunc(
      23400000000 + ((now.getTime() - start.getTime()) / 1000) * 17,
    )
    const unit = (dis / 149600000).toFixed(6) // 天文单位

    // 更新状态
    setDistance(dis)
    setAstronomicalUnits(Number.parseFloat(unit))
  }

  useEffect(() => {
    // 初始计算
    calculateDistance()

    // 设置定时器每秒更新一次
    const intervalId = setInterval(calculateDistance, 1000)

    // 清理函数
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <p>
        旅行者 1 号当前距离地球 {distance.toLocaleString()} 千米，约为{' '}
        {astronomicalUnits.toFixed(2)} 个天文单位.
      </p>
    </div>
  )
}

export default VoyagerDistance
