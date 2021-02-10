import React from 'react';
import Styled from './styled';

const { Spinner } = Styled;

export const Loader: React.FC = () => <Spinner className="loader"></Spinner>;
