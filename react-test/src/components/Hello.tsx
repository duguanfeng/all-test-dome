import * as React from "react";
import {HelloProps} from '../../interface/index';


export const Hello = (props: HelloProps) => (
    <h1>
        你好啊 {props.compiler} and {props.framework}!
    </h1>
);
