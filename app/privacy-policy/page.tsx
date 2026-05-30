import Navbared from '@/component/navthank'
import PrivacyPolicyPage from '@/component/privacy-policy'
import Footers from '@/component/thank-footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbared />
      <PrivacyPolicyPage />
      <Footers />
    </div>
  )
}

export default page
