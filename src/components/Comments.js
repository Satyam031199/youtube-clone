import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ReactTimeAgo from "react-time-ago";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchFromAPI(
      `commentThreads?part=snippet&videoId=${id}&maxResults=100`
    ).then((data) => setComments(data.items));
  }, [id]);
  const commentComponent = comments.map((item) => {
    return (
      <Box key={item.id} px={2}>
        <Stack direction="row" alignItems="center">
            <img
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="author"
              style={{
                borderRadius: "50%",
                objectFit: "fill",
                marginRight: "1.5rem",
              }}
            />
          <Stack direction="column">
            <Stack direction="row" marginTop={3} gap={2}>
              <Typography color="#b6b8b6" variant="subtitle2">
                {item.snippet.topLevelComment.snippet.authorDisplayName}
              </Typography>
              <Typography color="gray" variant="subtitle2">
                <ReactTimeAgo
                  date={item.snippet.topLevelComment.snippet.publishedAt}
                  locale="en-US"
                />
              </Typography>
            </Stack>
            <Typography
              color="white"
              variant="subtitle2"
              marginTop={1}
              fontWeight={400}
            >
              {item.snippet.topLevelComment.snippet.textDisplay}
            </Typography>
            <Stack direction="row" alignItems="end" gap={1}>
              <ThumbUpAltIcon style={{ color: "white", marginTop: "1rem" }} />
              <Typography color="white">
                {item.snippet.topLevelComment.snippet.likeCount}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    );
  });
  return (
    <Box>
      <Typography color="#fff" variant="h6" p={2}>
        {comments.length} Comments
      </Typography>
      {commentComponent}
    </Box>
  );
};

export default Comments;
