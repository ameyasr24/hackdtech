import React from "react";
import "./Post.css";
import { Bluetooth as Memory, Storage, Trigger } from 'grommet-icons';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Chart,
  Grid,
  Grommet,
  Text,
} from 'grommet';

const Post = props => {
    return (
        <div>
            <Card className="posts">
                <CardHeader className="cardHeader">{props.post.description}</CardHeader>
                <CardBody >{props.post.body}</CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">   
                </CardFooter>
            </Card>
        </div>
    )
}

export default Post;