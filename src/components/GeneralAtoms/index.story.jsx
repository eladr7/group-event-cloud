import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './Input';
import Label from './Label';
import Button from './Button';
import Logo from './Logo';
import Icon from './Icon';
import Form from './Form';
import Span from './Span';
import Iframe from './Iframe';
import VideosPlayer from './VideosPlayer';
import Img from './Img';

const youtubeOpts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    // autoplay: 1,
    start: "76"
  }
};

storiesOf('Atoms', module)
  .add('Input', () => (
    <Input onChange={e => action('onChange')(e.target.value)} />
  ))

  .add('Input With Data', () => (
    <Input
      value="user@email.com"
      onChange={e => action('onChange')(e.target.value)}
    />
  ))

  .add('Label', () => <Label>Label</Label>)

  .add('Form', () => (
    <Form
      onSubmit={e => {
        e.preventDefault();
        action('onSubmit')(e);
      }}
    >
      <button>Submit</button>
    </Form>
  ))

  .add('Button', () => <Button>Login</Button>)

  .add('Logo', () => <Logo />)

  .add('Icon Facebook', () => <Icon facebook />)

  .add('Icon Google', () => <Icon google />)

  .add('Span', () => <Span>Movie title</Span>)

  .add('Iframe', () => (
    <Iframe
        className="quick-view-image"
        src="https://www.youtube.com/embed/xRnUyVUJR_E?start=76"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    >
    </Iframe>
  ))

  .add('YouTube', () => (
    <VideosPlayer
        className="quick-view-image"
        videoId="xRnUyVUJR_E"
        opts={youtubeOpts}
    >
    </VideosPlayer>
  ))
  
  .add('Img', () => (
    <Img
      src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
      alt="Empty Tree"
    >
    </Img>
  ));
  