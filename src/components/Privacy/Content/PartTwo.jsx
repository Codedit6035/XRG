import React from 'react'



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
                </ol>
            </div>
        </div> 


    </div>
  )
}

export default PartTwo