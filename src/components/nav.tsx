import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

const Nav: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredBlogPosts, setFilteredBlogPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInitialBlogPosts();
    getUserId();
    loadBlogPosts();
  }, []);

  useEffect(() => {
    filterBlogPosts();
  }, [search, blogPosts]);

  const setInitialBlogPosts = () => {
   
    const blogPostData = [
        {
            id: "1",
            title: "Rendering",
            content: "Learn the basics of complex rendering.",
        }
    ]
   localStorage.setItem('blogPosts', JSON.stringify(blogPostData));
  }

  const getUserId = () => {
    const newUserID = localStorage.getItem("userId");
    setUserId(newUserID ? newUserID : "");
  };

  const loadBlogPosts = () => {
    const storedBlogPosts = localStorage.getItem("blogPosts");
    if (storedBlogPosts) {
      setBlogPosts(JSON.parse(storedBlogPosts));
    }
  };

  const filterBlogPosts = () => {
    if (search) {
      const filtered = blogPosts.filter((post) => {
        post.title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredBlogPosts(filtered);
    } else {
      setFilteredBlogPosts(blogPosts);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLogoutClick = (e) => {
    localStorage.removeItem('userId');
    navigate('/');
  }

  return (
    <nav className="p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <input
          type="search"
          className="bg-gray-700 text-white rounded-md py-2 px-4 w-64 focus:outline-none focus:bg-gray-600 transition duration-300"
          placeholder="Search Blog Posts..."
          value={search}
          onChange={handleSearchChange}
        />
        {search && filteredBlogPosts.length > 0 && (
          <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-md z-10">
            {filteredBlogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
              >
                {post.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <br />
      <div className="space-x-4">
        {userId ? (
          <div className=''>
            <Link
            to={`/dash/${userId}`}
            className="text-white hover:text-gray-300 bg-slate-500 p-2 ml-4 rounded-sm"
          >
            Profile
          </Link>
          <Link
            to={`/blog/rendering`}
            className="text-white hover:text-gray-300 bg-slate-500 p-2 ml-4 rounded-sm"
          >
            Blog
          </Link>
          <button className='bg-red-400 ml-4' onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
        ) : (
          <>
            <Link
              to="/login"
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
