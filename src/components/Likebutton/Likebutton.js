import { LikeButton } from '@lyket/react';

const Faq = () => {
  return (
    <>
      <h4 id="how-to-beat-me-at-chess"> </h4>
      <LikeButton
        id="how-to-beat-me-at-chess"
        namespace="my-blog-post"
        hideCounterIfLessThan={1}
      >
        {({
          handlePress,
          totalLikes,
          userLiked,
          isLoading,
          isCounterVisible
        }) => (
          <>
            <button onClick={handlePress} disabled={isLoading}>
              
            </button>
            {isCounterVisible && <div>Likes: {totalLikes}</div>}
            {userLiked && <div></div>}
          </>
        )}
      </LikeButton>
    </>
  )
};

export {Faq}