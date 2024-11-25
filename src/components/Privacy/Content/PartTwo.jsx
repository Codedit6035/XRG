import React from 'react'
import CookiesData from "../../../data/CookiesData"



const PartTwo = () => {
  return (
    <div className=''>
        {/*Privacy Policy*/}
        <div className='pb-10'>
            <h1 className='text-xl mb-4 font-semibold  text-shade1'>
            Privacy Policy
            </h1>
            <div>
                <ol className='list-decimal pl-5 flex flex-col gap-4'>
                    <li>
                        <h1 className='text-lg mb-4 font-medium  text-shade1'>What data is covered by this data protection declaration?</h1>
                        <p>All personal data is covered by this data protection declaration. This includes all information that refers to your identity, in particular name, address, postal address, telephone number and e-mail address.</p>
                    </li>
                    <li>
                        <h1 className='text-lg mb-4 font-medium  text-shade1'>Who is responsible for the careful handling of your data?</h1>
                        <p>Responsible for data processing is XRG Impact Advisory in Baden/Aargau, Switzerland (hereinafter XRG Advisory).</p>
                    </li>
                    <li>
                        <h1 className='text-lg mb-4 font-medium  text-shade1'>When does XRG Advisory use and process personal data?</h1>
                        <p className='mb-4 '>We know that the careful handling of your personal data is very important to you. Therefore, XRG Advisory attaches great importance to data protection. We fully comply with the strict provisions of the Swiss Data Protection Act. For the storage, processing and use of personal data and information not only the national data regulations but also the provisions of the European Data Protection Basic Regulation are being observed. In principle, you can visit the XRG Advisory website without leaving any personal data. In some cases, however, we may need such information from you:</p>
                        <ul className='list-disc pl-10 mb-4 '>
                            <li>
                             	in making contact with us
                            </li>
                            <li>
                             	in the communication of business-relevant information
                            </li>
                            <li>
                            	in the delivery of client-related documents
                            </li>
                            <li>
                             	when subscribing to and unsubscribing from our newsletter
                            </li>
                        </ul>
                        <p>
                        When subscribing to the newsletter, your e-mail address will be used for your own advertising purposes until you unsubscribe from the newsletter. You can unsubscribe at any time. We use the personal data in detail to handle business relations and to prevent misuse of our website. Furthermore, with your express consent, we will inform you about services and news at XRG Advisory. In order to get in touch with you easier and faster than by mail we ask you to provide us with your e-mail address.
                        </p>
                    </li>
                    <li>
                        <h1 className='text-lg mb-4 font-medium  text-shade1'>What does XRG Advisory do with your personal data?</h1>
                        <p>We store the personal data for optimal order processing. You have a right to free information about your stored data as well as if necessary a right to correction, blocking or deletion of these data. Furthermore, you can request information about the use of your personal data at any time.</p>
                    </li>
                    <li>
                        <h1 className='text-lg mb-4 font-medium  text-shade1'> How does XRG Advisory protect your personal data?</h1>
                        <p>If you have registered with XRG Advisory and log in with a password, your personal data will be transmitted to us. To prevent these from falling into the wrong hands, we encrypt them using the SSL procedure (Secure Socket Layer). This is currently the most common and most secure data transmission method on the internet. It is used by XRG Advisory as a standard as soon as sensitive data is transferred. You can see that encrypt data is being transmitted via the symbol of a lock in the lower status bar of your browser. XRG Advisory maintains various other security measures to protect the personal data of its customers. In connection with these security measures, you will occasionally be asked to provide proof of your identity before we disclose personal information to you. An example of this procedure is access to the customer account, which is only possible by entering a password.</p>
                    </li>
                    <li>
                        <h1 className='text-lg mb-4 font-medium  text-shade1'>Does XRG Advisory use cookies?</h1>
                        <div className='flex flex-col gap-3'>
                          {CookiesData.map((para, index) => (
                             <p key={index} className=" ">
                               {para}
                             </p>
                          ))} 
                        </div>
                        <a href="http://tools.google.com/dlpage/gaoptout?hl=en " target='blank' className='text-shade7 font-semibold'>http://tools.google.com/dlpage/gaoptout?hl=en </a>
                    </li>
                    <li>
                        <h1 className='text-lg mb-4 font-medium  text-shade1'>When will your data be deleted?</h1>
                        <p>The legislator has enacted a variety of storage obligations and periods. After the 10-year period has expired, the corresponding data is routinely deleted.</p>
                    </li>
                </ol>
            </div>
        </div> 


    </div>
  )
}

export default PartTwo