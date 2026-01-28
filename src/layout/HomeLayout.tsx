import About from "../components/About"
import Banner from "../components/Banner"
import ProductCategoryTab from "../pages/home/ProductCategoryTab"
import CategoryCarousel from "../pages/home/CategoryCarousel"
import ProductionProcess from "../pages/home/ProductionProcess"
import WhyChooseUs from "../pages/home/WhyChooseUs"
import ImageBanner from "../pages/home/ImageBanner"
import LogisticsAndSalesSection from "../pages/home/LogisticsAndSalesSection"


export const HomeLayout = () => {
  return (
    <div>
        <Banner />
        <About />
        <CategoryCarousel/>
        <ProductCategoryTab/>
        <ProductionProcess/>
        <LogisticsAndSalesSection/>
        <ImageBanner/>
        <WhyChooseUs/>
    </div>
  )
}
