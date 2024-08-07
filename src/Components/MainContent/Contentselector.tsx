import React, { useState } from 'react'
import './Content.css'
import Noticelist from './Notice/noticelist'
import Noticemain from './Notice/noticemain'
import Recruitment from './Recruitment/recruitment'
import Activities from './Activities/activities'
import SearchBox from '../Search/Searchbox'
import Scholarship from './Scholarship/scholarship'

const ContentSelector: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState('공지사항')
  const [activeTab, setActiveTab] = useState('전체')

  const notices = ['공지사항', '장학', '채용공고', '대외활동', '공모전']
  const tabs = ['전체', '학사', '특강', '모집 / 채용', '교내외 활동', '대학원']
  const scholarshipTabs = ['전체', '학자금', '장학금', '학자금 대출']

  const renderContent = () => {
    switch (selectedNotice) {
      case '공지사항':
        return (
          <>
            <Noticelist />
            <Noticemain />
          </>
        )
      case '장학':
        return (
          <>
            <Noticelist />
            <Scholarship />
          </>
        )
      case '채용공고':
        return <Recruitment />
      case '대외활동':
        return <Activities />
    }
  }

  return (
    <div className="Content-selector">
      <div className="Content-Selector-main">
        {notices.map(notice => (
          <div
            key={notice}
            className={`Content-Selector-sector ${
              selectedNotice === notice ? 'selected' : ''
            }`}
            onClick={() => setSelectedNotice(notice)}
          >
            {notice}
          </div>
        ))}
      </div>

      <div className="Counter-main2">
        {selectedNotice === '공지사항' && (
          <div className="Content-Selector-main2">
            {tabs.map(tab => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        )}

        {selectedNotice === '장학' && (
          <div className="Content-Selector-main2">
            {scholarshipTabs.map(tab => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        )}

        <SearchBox />
      </div>

      <div className="Contents">{renderContent()}</div>
    </div>
  )
}

export default ContentSelector
