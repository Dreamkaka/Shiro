'use client'

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import React, { useEffect, useState } from 'react'

// 扩展 dayjs 功能以支持 duration
dayjs.extend(duration)

const RunningTime: React.FC = () => {
  const [durationString, setDurationString] = useState<string>('')

  // 设置起始日期
  const startDate = dayjs('2023-03-31')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = dayjs()
      const dur = dayjs.duration(now.diff(startDate))
      const days = Math.floor(dur.asDays())
      const formattedDuration = `本站已勉强运行${days}${dur.format('天HH时mm分ss秒')}`
      setDurationString(formattedDuration)
    }, 1000)

    // 清理函数
    return () => clearInterval(intervalId)
  }, [startDate])

  return <div id="realtime_duration">{durationString}</div>
}

export default RunningTime
