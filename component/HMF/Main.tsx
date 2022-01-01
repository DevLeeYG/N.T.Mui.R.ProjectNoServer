import React from 'react';
import {
  CardMedia,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Container from '@mui/material/Container';
import { useStyles } from './HeadSource';

const Main = () => {
  const xs = useMediaQuery('(max-width:375px)');

  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',

        backgroundColor: 'black',
      }}
    >
      {xs ? (
        <>
          <CardMedia
            sx={{ display: 'flex', width: '375px', height: '812px' }}
            component="img"
            src="/img/home1.jpg"
          />
        </>
      ) : (
        <CardMedia component="img" src="/img/home1.jpg" />
      )}
      <Box></Box>
    </Box>
  );
};

export default Main;
{
  /* <div class="owl-stage" style="transform: translate3d(-750px, 0px, 0px); transition: all 0s ease 0s; width: 1875px;"><div class="owl-item cloned" style="width: 375px;"><div class="item last-item">
			<div class="visual-text">
				<div class="container">
				<!-- 	<p class="fs12 fs20-sm fs15-xs fcWhite mb25 aos_item" data-aos="fade-up" data-aos-duration="500">
						EDAM 2020
					</p> -->
					<h1 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">EDAM</h1>
					<h2 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">Entertainment</h2>
				</div>
			</div>
			<div class="visual-img">
				<img src="../html/images/main/main_visual_2.jpg" class="type-b" style="max-width:100%" alt="">
			</div>
		</div></div><div class="owl-item cloned" style="width: 375px;"><div class="item last-item">
			<div class="visual-text">
				<div class="container">
				<!-- 	<p class="fs12 fs20-sm fs15-xs fcWhite mb25 aos_item" data-aos="fade-up" data-aos-duration="500">
						EDAM 2020
					</p> -->
					<h1 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">EDAM</h1>
					<h2 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">Entertainment</h2>
				</div>
			</div>
			<div class="visual-img">
				<img src="../html/images/main/main_visual_2.jpg" class="type-b" style="max-width:100%" alt="">
			</div>
		</div></div><div class="owl-item active" style="width: 375px;"><div class="item last-item">
			<div class="visual-text">
				<div class="container">
				<!-- 	<p class="fs12 fs20-sm fs15-xs fcWhite mb25 aos_item" data-aos="fade-up" data-aos-duration="500">
						EDAM 2020
					</p> -->
					<h1 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">EDAM</h1>
					<h2 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">Entertainment</h2>
				</div>
			</div>
			<div class="visual-img">
				<img src="../html/images/main/main_visual_2.jpg" class="type-b" style="max-width:100%" alt="">
			</div>
		</div></div><div class="owl-item cloned" style="width: 375px;"><div class="item last-item">
			<div class="visual-text">
				<div class="container">
				<!-- 	<p class="fs12 fs20-sm fs15-xs fcWhite mb25 aos_item" data-aos="fade-up" data-aos-duration="500">
						EDAM 2020
					</p> -->
					<h1 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">EDAM</h1>
					<h2 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">Entertainment</h2>
				</div>
			</div>
			<div class="visual-img">
				<img src="../html/images/main/main_visual_2.jpg" class="type-b" style="max-width:100%" alt="">
			</div>
		</div></div><div class="owl-item cloned" style="width: 375px;"><div class="item last-item">
			<div class="visual-text">
				<div class="container">
				<!-- 	<p class="fs12 fs20-sm fs15-xs fcWhite mb25 aos_item" data-aos="fade-up" data-aos-duration="500">
						EDAM 2020
					</p> -->
					<h1 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">EDAM</h1>
					<h2 class="cormorant fw700 fcWhite bfs116 aos_item aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">Entertainment</h2>
				</div>
			</div>
			<div class="visual-img">
				<img src="../html/images/main/main_visual_2.jpg" class="type-b" style="max-width:100%" alt="">
			</div>
		</div></div></div> */
}
