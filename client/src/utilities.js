export const constructComment = (data, content) => {
  const newCommentId = data.comments[data.comments.length - 1].id + 1;
  const { currentUser } = data;
  return {
    id: newCommentId,
    content,
    createdAt: "1 month ago",
    score: 0,
    user: currentUser,
    replies: [],
  };
};
