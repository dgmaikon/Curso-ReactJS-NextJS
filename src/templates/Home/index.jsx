import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [postPerPage] = useState(2);

  const handleLoadPosts = useCallback(async (page, postPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postPerPage);
  }, [handleLoadPosts, postPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const noMorePosts = page + postPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search Value:{searchValue}</h1>}
        <TextInput
          searchValue={searchValue}
          handleChange={handleChange}
          placeholder="type your search"
        />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>No posts found.</p>}

      <div className="button-container">
        {!searchValue && (
          <Button
            text="load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};
