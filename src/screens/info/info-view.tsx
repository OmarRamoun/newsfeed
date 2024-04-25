import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import {useSelector} from 'react-redux';

import {Flex, Table, TableBody, Typography, EmptyState, Spinner, Image} from '@components';
import type {RootState} from '@state/store';
import type {ViewNavigationProps, RouteNavigationProps, Article} from '@types';

interface InfoViewProps {
  navigation?: ViewNavigationProps<'Info'>;
  route?: RouteNavigationProps<'Info'>;
}

const InfoView = ({route}: InfoViewProps) => {
  const {id: articleId}: {id?: Article['id']} = route?.params ?? {};

  const articles = useSelector((state: RootState) => state.articles.value);

  const [currentArticle, setCurrentArticle] = useState<Article | undefined>(undefined);

  const {title, content, urlToImage} = currentArticle || {};

  useEffect(() => {
    const article = articles.find((a) => a.id === articleId);
    setCurrentArticle(article);
  }, [articleId, articles]);

  if (!currentArticle) {
    return (
      <Flex>
        <EmptyState
          text="Loading...."
          bottom={
            <Flex flex={1} alignItems="center" justifyContent="center">
              <Spinner />
            </Flex>
          }
        />
      </Flex>
    );
  }

  return (
    <>
      <Flex flex={1} m={2}>
        <Table outlined>
          <Flex alignItems="center" justifyContent="center" m={5}>
            <Image
              src={urlToImage || 'https://placekitten.com/150/150'}
              width={150}
              height={150}
              borderRadius={8}
              alt="article-image"
            />
          </Flex>

          <TableBody shouldScroll>
            <ScrollView>
              <Flex>
                <Typography textStyle="bodyBold">{title}</Typography>
              </Flex>
              <Flex>
                <Typography>{content}</Typography>
              </Flex>
            </ScrollView>
          </TableBody>
        </Table>
      </Flex>
    </>
  );
};

export {InfoView};
