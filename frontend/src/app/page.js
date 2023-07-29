import Image from 'next/image'
import Banner from '../components/Banner'

import PopularServices from '@/components/PopularServices'
import CategoriesTable from '@/components/CategoriesTable'

export default function Home() {
  return (
    
     <main className="flex min-h-screen flex-col items-center w-full ">
<Banner />
<PopularServices />
<CategoriesTable title="Explore more FeatureMatch Categories" linkName="View All categories" src="/category"/>
</main>
  
 
  )
}
