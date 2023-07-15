import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TabsandContent = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styleTerms = {
    color: value === 0 ? 'white' : '#6E6E6E',
    backgroundColor: value === 0 ? '#2B2B2B' : 'black',
  }

  const stylePrivacy = {
    color: value === 1 ? 'white' : '#6E6E6E',
    backgroundColor: value === 1 ? '#2B2B2B' : 'black',
  }

  return (
    <Box >
      <Tabs value={value} onChange={handleChange} textColor='warning' TabIndicatorProps={{ style: { backgroundColor: "transparent", textColor: 'white' } }} >
        <Tab label="Terms and Conditions" sx={{ borderRadius: '333px', ...styleTerms, fontFamily:'Raleway' }} />
        <Tab label="Privacy policy" sx={{ borderRadius: '333px', ...stylePrivacy, fontFamily:'Raleway'}} />
      </Tabs>
      <Box mt={2} sx={{ height: 'fit-content', width: '100%', backgroundColor: '#1F1F1F', borderRadius: '20px' }}>
        {
          value === 0
          &&
          <Box p={4} pb={10} sx={{ color: 'white' }}>
            <Typography fontFamily={'Raleway'} sx={{ fontSize: '22px', fontWeight: 600 }}>
              Terms and Conditions
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
              Agreement between User and www.deepduck.ai
              Welcome to www.deepduck.ai. The www.deepduck.ai website (the "Site") is comprised of various web pages operated by deep face ("deep face"). www.deepduck.ai is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of www.deepduck.ai constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            www.deepduck.ai is a fun and easy to use AI face swap Site.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            deep face is an artificial intelligence service, with the capability of swapping out of faces on videos, images and GIF's.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Privacy</strong>- Your use of www.deepduck.ai is subject to deep face's Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </Typography>
            
            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Electronic Communications</strong>- Visiting www.deepduck.ai or sending emails to deep face constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Your Account</strong>- If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that deep face is not responsible for third party access to your account that results from theft or misappropriation of your account. deep face and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Children Under Thirteen</strong>- deep face does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use www.deepduck.ai only with permission of a parent or guardian.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Cancellation/Refund Policy</strong>- Cancellation of an order and a refund may be issued anytime before the use of deep face "credits." Once credits have been spent, (used for a swap of any kind) the account is activated, and the user is free to use the remainder of their credits without the possibility of a refund. An account may be terminated upon request.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Links to Third Party Sites/Third Party Services</strong>- www.deepduck.ai may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of deep face and deep face is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. deep face is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by deep face of the site or any association with its operators.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            Certain services made available via www.deepduck.ai are delivered by third party sites and organizations. By using any product, service or functionality originating from the www.deepduck.ai domain, you hereby acknowledge and consent that deep face may share such information and data with any third party with whom deep face has a contractual relationship to provide the requested product, service or functionality on behalf of www.deepduck.ai users and customers.
            </Typography>


            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>No Unlawful or Prohibited Use/Intellectual Property</strong>- You are granted a non-exclusive, non-transferable, revocable license to access and use www.deepduck.ai strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to deep face that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of deep face or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. deep face content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of deep face and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of deep face or our licensors except as expressly authorized by these Terms.
            </Typography>


            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Upload Restrictions</strong>- At no such time will the user be permitted to upload nefarious depictions such as pornography, violence, gore and anything that can be harmful to another individual online. If such depictions are discovered, the customer's account will be terminated without the possibility of a refund. 
            </Typography>


            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>International Users</strong>- The Service is controlled, operated and administered by deep face from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the deep face Content accessed through www.deepduck.ai in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
            </Typography>


            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Indemnification</strong>- You agree to indemnify, defend and hold harmless deep face, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. deep face reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with deep face in asserting any available defenses.
            </Typography>


            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Arbitration</strong>- In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrator's award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney's fees. The parties agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Liability Disclaimer</strong>- THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. deep face AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            deep face AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. deep face AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL deep face AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF deep face OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            <strong>Termination/Access Restriction </strong>- deep face reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of Delaware and you hereby consent to the exclusive jurisdiction and venue of courts in Delaware in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            You agree that no joint venture, partnership, employment, or agency relationship exists between you and deep face as a result of this agreement or use of the Site. deep face's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of deep face's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by deep face with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
            Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and deep face with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and deep face with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Changes to Terms</strong>- deep face reserves the right, in its sole discretion, to change the Terms under which www.deepduck.ai is offered. The most current version of the Terms will supersede all previous versions. deep face encourages you to periodically review the Terms to stay informed of our updates.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Contact Us</strong>- deep face welcomes your questions or comments regarding this Statement of Privacy. If you believe that deep face has not adhered to this Statement, please contact deep face at: <br /> deep face <br />
              28914 Roadside Dr <br />
              Agoura Hills, California 91301 <br /> <br /> Email Address: <br /> <Link onClick={(e) => window.open('mailto:muneeb.thekhan222@gmail.com', '_blank', 'noreferrer')} >support@deepduck.ai</Link> <br /> <br /> Telephone number: <br /> 302-260-6810 <br /> Effective as of April 10, 2023
            </Typography>

          </Box>

        }

        {
          value === 1
          &&
          <Box p={4} pb={10} sx={{ color: 'white' }}>
            <Typography fontFamily={'Raleway'} sx={{ fontSize: '22px', fontWeight: 600 }}>
              Privacy policy
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
              Protecting your private information is our priority. This Statement of Privacy applies to www.deepduck.ai, and deep face and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to deep face include www.deepduck.ai and deep face. The deep face website is a fun to use, artificial intelligence face swap site. By using the deep face website, you consent to the data practices described in this statement.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Collection of your Personal Information</strong>- In order to better provide you with products and services offered, deep face may collect personally identifiable information, such as your:
              -First and Last Name -Mailing Address -E-mail Address -Phone Number
              If you purchase deep face's products and services, we collect billing and credit card information. This information is used to complete the purchase transaction.
              We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Sharing Information with Third Parties</strong>- deep face does not sell, rent or lease its customer lists to third parties.
              deep face may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to deep face, and they are required to maintain the confidentiality of your information.
              deep face may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on deep face or the site; (b) protect and defend the rights or property of deep face; and/or (c) act under exigent circumstances to protect the personal safety of users of deep face, or the public.


            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Automatically Collected Information</strong>- Information about your computer hardware and software may be automatically collected by deep face. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the deep face website.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Security of your Personal Information</strong>- deep face secures your personal information from unauthorized access, use, or disclosure. deep face uses the following methods for this purpose:
              -SSL Protocol
              When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
              We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Right to Deletion</strong>- Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
              •Delete your personal information from our records; and•Direct any service providers to delete your personal information from their records.
              Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:
              •Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;•Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;•Debug to identify and repair errors that impair existing intended functionality;•Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;•Comply with the California Electronic Communications Privacy Act;•Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;•Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;•Comply with an existing legal obligation; or•Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Children Under Thirteen</strong>- deep face does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.
            </Typography>


            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>E-mail Communications</strong>- From time to time, deep face may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from deep face or click on a link therein.
              If you would like to stop receiving marketing or promotional communications via email from deep face, you may opt out of such communications by contacting deep face or select Unsubscribe.
            </Typography>


            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>External Data Storage Sites</strong>- We may store your data on servers provided by third party hosting vendors with whom we have contracted.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Changes to this Statement</strong>-deep face reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
            </Typography>

            <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '30px' }}>
              <strong>Contact Information</strong>- deep face welcomes your questions or comments regarding this Statement of Privacy. If you believe that deep face has not adhered to this Statement, please contact deep face at: <br /> deep face <br />
              28914 Roadside Dr <br />
              Agoura Hills, California 91301 <br /> <br /> Email Address: <br /> <Link onClick={(e) => window.open('mailto:muneeb.thekhan222@gmail.com', '_blank', 'noreferrer')} >support@deepduck.ai</Link> <br /> <br /> Telephone number: <br /> 302-260-6810 <br /> Effective as of April 10, 2023
            </Typography>

          </Box>

        }
      </Box>
    </Box>
  )
}

export default React.memo(TabsandContent)