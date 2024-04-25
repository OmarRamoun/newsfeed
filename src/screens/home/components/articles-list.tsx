import React from 'react';
import {RefreshControl} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Flex, FlatList, Typography, Image, Pressable} from '@components';
import type {ViewNavigationProps, Article} from '@types';

interface ArticlesListProps {
  articles: Article[];
  refreshing: boolean;
  onRefresh: () => void;
}

const ArticlesList = ({articles, refreshing, onRefresh}: ArticlesListProps) => {
  const navigation = useNavigation<ViewNavigationProps<'Home'>>();
  return (
    <FlatList
      removeClippedSubviews
      data={articles}
      keyExtractor={(article) => `contact-${article.id}`}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      renderItem={({item: article}) => {
        const {urlToImage, title} = article;
        return (
          <Pressable onPress={() => navigation.navigate('Info', {id: article.id})}>
            <Flex flexDirection="row" alignItems="center" p={2}>
              <Flex mr={2}>
                <Image src={urlToImage} width={80} height={80} borderRadius={8} alt="article-image" />
              </Flex>

              <Flex>
                <Typography>{title}</Typography>
              </Flex>
            </Flex>
          </Pressable>
        );
      }}
    />
  );
};

export {ArticlesList};
