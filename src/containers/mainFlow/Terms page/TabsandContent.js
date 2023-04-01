import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TabsandContent = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styleTerms ={
    color: value === 0 ?'white':'#6E6E6E',
    backgroundColor:value === 0 ?'#2B2B2B':'black',
  }

  const stylePrivacy ={
    color: value === 1?'white':'#6E6E6E',
    backgroundColor:value === 1 ?'#2B2B2B':'black',
  }

  return (
    <Box >
      <Tabs value={value} onChange={handleChange} textColor='warning' TabIndicatorProps={{style: {backgroundColor: "transparent",textColor:'white'} }} >
        <Tab label="Terms of services" sx={{ borderRadius:'333px', ...styleTerms }} />
        <Tab label="Privacy policy" sx={{ borderRadius:'333px', ...stylePrivacy, }} />
      </Tabs>
      <Box mt={2} sx={{ height: 'fit-content', width: '100%', backgroundColor: '#1F1F1F', borderRadius: '20px' }}>
        {
          value === 0
          &&
          <Box p={4} pb={10} sx={{color:'white'}}>
          <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>
            Terms of service 
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'20px' }}>
          OVERVIEW: This website is operated by Deep Duck. Throughout the site, the terms “we”, “us” and “our” refer to Deep Duck. Deep Duck offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.<br /> Our store is hosted on DigitalOcean. They provide us with the online platform that allows us to sell our products and services to you.
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
           <strong>SECTION 1</strong>  - ONLINE STORE TERMS By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).You must not transmit any worms or viruses or any code of a destructive nature.A breach or violation of any of the Terms will result in an immediate termination of your Services.
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 2</strong>  - GENERAL CONDITIONS We reserve the right to refuse service to anyone for any reason at any time.You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us.The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 3</strong> - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 4</strong> - MODIFICATIONS TO THE SERVICE AND PRICES Prices for our products are subject to change without notice.We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 5</strong> - PRODUCTS OR SERVICES (if applicable) Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to a refund only according to our Refund Policy.We have made every effort to display as accurately as possible the description of our services that appear at the store. We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or Service made on this site is void where prohibited.We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected. Deep Duck - Lifetime service constitutes as a "as long as we are in business" service. If for some unfortunate event, Deep Duck is no longer is business, Lifetime orders would be terminated just as all the other recurring customers services. 
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 6</strong> - ACCURACY OF BILLING AND ACCOUNT INFORMATIONWe reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.For more details, please review our Refund Policy. 
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 7</strong> - OPTIONAL TOOLSWe may provide you with access to third-party tools over which we neither monitor nor have any control nor input.You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).We may also, in the future, offer new Services and/or features through the website (including the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms of Service.
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 8</strong> - THIRD-PARTY LINKSCertain content, products and Services available via our Service may include materials from third-parties.Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties.We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 9</strong> - UPLOAD LIMITATIONS Certain contents uploaded such as pornography, gore, violence and or anything harmful in nature is strictly prohibited and will be terminated if discovered, account termination, with no refunds issued for breaking such terms. 
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 10</strong> - PERSONAL INFORMATION Your submission of personal information through the store is governed by our Privacy Policy. 
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 11</strong> - ERRORS, INACCURACIES AND OMISSIONS Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 12</strong> - PROHIBITED USES In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses. Certain contents uploaded such as pornography, gore, violence and or anything harmful in nature is strictly prohibited and will be terminated if discovered, account termination, with no refunds issued for breaking such terms. 
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
            <strong>SECTION 13</strong> - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITYWe do not guarantee, represent or warrant that your use of our Service will be uninterrupted, timely, secure or error-free.We do not warrant that the results that may be obtained from the use of the Service will be accurate or reliable.You agree that from time to time we may remove the Service for indefinite periods of time or cancel the Service at any time, without notice to you.You expressly agree that your use of, or inability to use, the Service is at your sole risk. The Service and all products and Services delivered to you through the Service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.In no case shall Deep Duck, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, Service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the Service or any products procured using the Service, or for any other claim related in any way to your use of the Service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the Service or any content (or product) posted, transmitted, or otherwise made available via the Service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 14</strong> - INDEMNIFICATION You agree to indemnify, defend and hold harmless Deep Duck and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, Service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 15</strong> - SEVERABILITY In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 16</strong> - TERMINATION The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 17</strong>- ENTIRE AGREEMENT The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.These Terms of Service and any policies or operating rules posted by us on this site or in respect to the Service constitutes the entire agreement and understanding between you and us and governs your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 18</strong>- GOVERNING LAW These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United States.
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 19</strong> - CHANGES TO TERMS OF SERVICE You can review the most current version of the Terms of Service at any time at this page.We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          <strong>SECTION 20</strong>- CONTACT INFORMATION Questions about the Terms of Service should be sent to us: <Link  onClick={(e) =>window.open('mailto:muneeb.thekhan222@gmail.com', '_blank', 'noreferrer')} >support@deepduck.ai</Link>
          </Typography>

        </Box>

      }

      {
          value === 1
          &&
          <Box p={4} pb={10} sx={{color:'white'}}>
          <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>
            Privacy policy 
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>

        </Box>

      }
      </Box>
    </Box>
  )
}

export default TabsandContent