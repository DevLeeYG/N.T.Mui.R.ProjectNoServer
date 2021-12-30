import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Ava from '../img/download.jpg';
import { CardMedia } from '@material-ui/core';
import Card from '@mui/material/Card';
import { height } from '@mui/system';

export default function ImageAvatars() {
  return (
    <div>
      <Card>
        <CardMedia height="100" component="img" image="/img/ari.jpg" alt="" />
      </Card>
    </div>
  );
}
