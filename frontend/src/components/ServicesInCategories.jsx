import Link from "next/link";


const ServicesInCategories = () => {

    const categories = [
        // Replace this with your actual category data
        {
          id: 1,
          title: 'Hosting ',
          image: 'data:image/jpeg;base64,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',
        },
        {
          id: 2,
          title: 'Category 2',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          title: 'Category 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 4,
          title: 'Category 2',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 1,
          title: 'Category 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Category 2',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 1,
          title: 'Category 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Category 2',
          image: 'https://via.placeholder.com/150',
        },
        // Add more categories as needed
      ];

  return (
    <div className="container mx-auto my-8">
    <div className="text-3xl font-bold mb-4 text-center">HOSTING SERVICES</div>
    <div className="flex flex-wrap justify-center">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative overflow-hidden bg-gray-300 rounded-lg w-32 md:w-48 lg:w-64 h-20 md:h-24 lg:h-32 m-2"
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity rounded-lg">
            <Link href={"/"} className="bg-[#533aa7] text-white font-semibold  px-4 py-2 rounded-lg">
              Compare
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ServicesInCategories