import { ChangeEvent, SetStateAction, useState } from "react"
import { IoSearch } from "react-icons/io5"
import { allData, blogPage } from "../../../AllData"
import { useNavigate } from "react-router-dom";
import { BlogData } from "../BlogCard/BlogCard";

const Navbar = () => {
  
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<{ path: string, matchedData: string[] }[] | BlogData[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);

    if(e.target.value === "") {
      setResults([]);
      return;
    }

    const newResults: SetStateAction<any[]> = [];
    allData.forEach(page => {
      const matchedData = page.pageData.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));
      console.log(matchedData);
      if (matchedData.length > 0) {
        newResults.push({ path: page.path, matchedData });
      }
    });

    const lowerCaseQuery = e.target.value.toLowerCase();

    blogPage.blogData.forEach(blog => {
      if (
        blog.title.toLowerCase().includes(lowerCaseQuery) ||
        blog.description.toLowerCase().includes(lowerCaseQuery)
      ) {
        newResults.push(blog);
      }
    });

    setResults(newResults)
  }

  function isBlogData(variable: any): variable is BlogData {
    return (
      typeof variable === 'object' &&
      variable !== null &&
      'id' in variable &&
      'title' in variable &&
      'description' in variable &&
      'date' in variable &&
      'image' in variable
    );
  }
  
  const goTo = (result: { path: string, matchedData: string[] } | BlogData) => {
    if(isBlogData(result)) {
      navigate(
        `/Blog/${result.id}-${result.title.replace(/ /g, '-')}`, 
        {
          state: { data: result }
        }
      )
    } else {
      navigate(result.path);
    }

    setQuery('');
    setIsSearchOpen(false);
    setResults([]);
  }

  return (
    <nav className="relative nav:sticky nav:top-0 z-50 nav:bg-[#F5F5F5]">
      <div className={`${isSearchOpen && results.length > 0 ? ' p-4 max-h-44 w-96 border-2 blogsm:w-[calc(100%-2rem)]': ' p-0 h-0 w-0 border-0'} absolute space-y-2 top-16 z-[51] left-12 blogsm:left-4 rounded-md border-gray-300 overflow-y-auto bg-[#F5F5F5] shadow-lg transition-all duration-200`}>
        {
          results.map((result, index) => (
            <button onClick={() => goTo(result)} key={index} className="hover:text-primary text-left transition-all duration-200">
              <h1 className="font-semibold">{isBlogData(result) ? result.title: ( result.path === "/" ? "Home": result.path.substring(1, result.path.length))} <span className="text-xs">({isBlogData(result) ? 'BlogPost': 'Page'})</span></h1>
              <p className="line-clamp-1 text-ellipsis text-xs italic">{isBlogData(result) ? result.description: result.matchedData.join(', ')}</p>
            </button>
          ))
        }
      </div>
      <div className={`pt-4 mb-2 h-14 px-12 ${ isNavbarOpen ? 'nav:h-screen': 'nav:h-[4.5rem]'} overflow-hidden relative transition-all duration-200`}>
        <button onClick={() => setIsNavbarOpen(!isNavbarOpen)} className="group absolute top-6 right-7 hidden nav:block w-8 space-y-1.5">
            <div className={`h-1 bg-black w-full rounded-full relative ${ isNavbarOpen && 'top-2.5 rotate-45' } group-hover:top-2.5 group-hover:rotate-45 transition-all duration-200`} />
            <div className={`h-1 bg-black w-full rounded-full relative ${ isNavbarOpen && 'opacity-0' } group-hover:opacity-0 transition-all duration-200`} />
            <div className={`h-1 bg-black w-full rounded-full relative ${ isNavbarOpen && 'bottom-2.5 -rotate-45' } group-hover:bottom-2.5 group-hover:-rotate-45 transition-all duration-200`} />
        </button>
        <div className="flex items-center justify-between nav:flex-col nav:items-start">
          <div className="flex-1 relative flex items-center h-10 hover:drop-shadow-sm transition-all duration-300">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className={`h-10 w-10 min-w-10 p-1 ${ isSearchOpen ? 'rounded-l-md': 'rounded-md' } bg-[#121212] hover:bg-primary transition-all duration-300`}>
              <IoSearch className="text-white h-full w-full" />
            </button>
            <input placeholder="Search" value={query} onChange={(e) => handleSearch(e)} className={`${ !isSearchOpen ? 'w-0 pl-0 border-0': 'w-52 nav:w-full nav:mr-8 pl-2 border-2'} h-10 rounded-r-md py-1.5 outline-none border-l-0 border-[#E5E5E5] transition-all duration-300`} />
          </div>
          <a href="/" className="flex-1 nav:absolute nav:top-24">
            <img className="h-10 w-auto mx-auto" src="/svgs/Title.svg" alt="Title" />
          </a>
          <div className="flex-1 flex items-center justify-end space-x-12 text-sm nav:text-lg nav:flex-col nav:space-x-0 nav:items-start nav:space-y-6 nav:mt-28">
            <a href="/About" className="pt-px h-fit rounded-full w-fit whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">About</a>
            <a href="/Blog" className="pt-px h-fit rounded-full w-fit whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">Blog</a>
            <a href="/Episodes" className="pt-px h-fit rounded-full w-fit whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">Episodes</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar