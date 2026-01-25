import About from "../components/About"
import Banner from "../components/Banner"
import ProductCategoryTab from "../pages/home/ProductCategoryTab"
import CategoryCarousel from "../pages/home/CategoryCarousel"
import WhyChooseUs from "../pages/home/WhyChooseUs"
import ImageBanner from "../pages/home/ImageBanner"


export const HomeLayout = () => {
  return (
    <div>
        <Banner />
        <About />
        <CategoryCarousel/>
        <ProductCategoryTab/>
        <ImageBanner/>
        <WhyChooseUs/>
    </div>
  )
}
