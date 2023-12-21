import { BlogList } from "@/components/dashboard/BlogList"
import { PostList } from "@/components/dashboard/PostList"
import SectionNavbar from "@/components/common/SectionNavbar"
import Sidebar from "@/components/dashboard/Sidebar"

const page = () => {
  return (
    <>
    <SectionNavbar/>
    <PostList/>
    <BlogList/>
    </>
  )
}
export default page
