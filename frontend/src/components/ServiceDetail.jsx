import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ServiceDetail = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-3 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-4/5 mx-auto mb-10">
    <div className="flex justify-between items-center w-full p-2 min-w-[300px] border-b-2">
      <div className="w-16 h-16 flex items-center justify-center font-bold text-[#12141d] text-3xl rounded-full shadow-md border-2 border-purple-500">
        1
      </div>

        <Image
          className="rounded-md mx-4"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAB/CAMAAADimG+QAAAAeFBMVEVnPeb///9mO+ZcK+Xd1/llOeZtRudLAOP7+f+lk+9gMeVhM+VxTOfu6vt5V+hWHuRQDuNaJuXx7vzIvfWgi+7AtPPMwfaij+6zpPGNc+vVzfe9sPO6rPKReOyEZ+qahO2unfCWfu3QxvZ9Xenp5Pvj3fqJbet1UuhyiGSgAAAEXUlEQVR4nO2b25KqOhBA0wnBmIjcVG5yB/n/P9wdHMvZM4775ZwaJ9PrAVJJrGKRhkBLGCMIgiAIgiAIgiAIgiAIgiAIgiAIgiBeFmH44wapv2r54YRezfWjBr6kPRMuSm8AhjqUnxv4LoGhFw9Px89mowDUsHyW5rsAW8rLxrnwtspI6psP0qsy4jVSuyX9pgwqH/92vikDlL10yvmmDBDs/hK7KwP0Tl3Rd2XY/zXM75W34rsO7/+AlO+QskOQ8h379PXblH3PfWU/fIcw0u+cV569O3N60TrUg3Jb+QPnMTZxX/4mZQgqIQTLkl+kjO8amdSCnZVjyk+MkWm7M2FTm+8+zP+S0HvKPOcLN04ZM+n/g8V36mXZwiXzmVwxH9A3HqTGfjJcLt2QWo53qpXzukEuTkU210KO5+f3MMcmqShojdD+8dlc5ZgyzsteLXTUlE+knVMGddzHRl+fLX+JMkCSR/iY1Qa/SBmlay519B7hflak9L/MY7uqTLkvUnYIUr7zK5VdzWNH01fK/uyoshxz9VCZ8TF3U5lJzc4PlbHFH5xURrXQPyYPlG3LuCbvnVNmzIgGX5g/KzOm1+S9g8qoZprykTK2sDroXFS2QfxFUo+b0L0k5z9xLMNJEARBEMQ3IO3n8/z6pbk0t79Quf1PVdrdCscmY9slu2257WxL1z9j3wo/Yq3JpV8k99sLFvVyqNLD3rqxtkq7xizZwZLtTJMVRo5ZI5kpssagcdOl1WEvsdJ2qfEVO8vzrJCv/kzGmQcHYS4w+1yP64d7U2G4qWzJi9q3ZEARHqEMxRaSxsQlVDEz3ZpC6ARWrn19cU0dVK8+zpyV0ArT4CFLLM5FU0LAzCVR9dj2YmnrAcqi3cVnOIUiA0jCeIA8xpMEeXOp9hIry7rvL0znMIx4ItoXf79alSW72FFqlcJrUc5wiGulChlrvJajCtLI8JuygnJzQuXIg7OQGrtg5cleyByVj5vNjI3fLfUcqzzN82SVO5g3eOwVHEM2YKh2OPAsPkIa4u5NOS0hS9Fqo6DXcikuxp6HaZpajcpl3amXX3FhlVWSJFflMmLMnNHR7PIA4ITNH5SPTAV2IDegeq3bZIqwMpnnuTf6ei13r76uxiof3gIbb06RlHLAexLTmmOct/rTKIsetTCwA9jG4oC/sIFtOF8D20Nr+erfzLy7fZn9BOdl1wEseA72Oz9RmfikzPTRKmNIJAXbQmCVhz3C1ms5Be/VF0Suo3xV5jhogFGLoWkKmLwAgr20yierXMFgJ6kTM2MAZ7xD4YSGXZINVqoA2eMkdYrG5OWTgJylQY3PGEHqc66LMlFlj1G6rwKVlCPGqNh69hascSd0P+WMYw2Ovtzlk0pmnK766wfbiznMOEt3c8VefZh1bKeYeA1HKeJ4XbhsC1iyHcx1Feu6ww23W9uAMxSibd8Vee2ihWNLIQmCIAiCIAiCIAiCIAiCIAiCIAiCIH4ofwBp403BcYgClgAAAABJRU5ErkJggg=="
        width={100}
        height={100}
        alt="Picture of the author"
      />

      <Link
        href={"/"}
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2"
      >
        VISIT SITE
      </Link>
    </div>

    <div className="text-sm my-5 px-4">
      <p className="my-3">
        SiteGround is one of the most popular and highest rated hosting
        providers in the WordPress community. They provide unique in-house
        WordPress speed and security solutions to make your site as fast and
        secure as possible.
      </p>
      <p className="my-3">
        SiteGround is one of the most popular and highest rated hosting
        providers in the WordPress community. They provide unique in-house
        WordPress speed and security solutions to make your site as fast and
        secure as possible.
        They are known for the best 24/7 support in the industry, which is
        why they're an official 'WordPress' recommended hosting provider.
        This is also why we use SiteGround for hosting the WPBeginner website.
        SiteGround features include automatic upgrades, daily backups,
        built-in WP caching, free CDN, free SSL, one-click staging, and GIT
        version control. They are also one of the few companies offering
        location-specific hosting with 6 data centers in the USA, Europe,
        Asia, and Australia. On top of all this, they have а special 63%
        discount for WPBeginner readers.
      </p>
      <p className="my-3">
        Europe, Asia, and Australia. On top of all this, they have а special
        63% discount for WPBeginner readers.
      </p>
    </div>
  </div>
  )
}

export default ServiceDetail