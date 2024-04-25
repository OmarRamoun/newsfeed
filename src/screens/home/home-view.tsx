import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {fetchNews} from '@api';
import {Box, EmptyState, Flex, Icon, InputContainer, InputText, Line, TouchableOpacity} from '@components';
import type {RootState} from '@state/store';
import {theme} from '@styles';
import type {Article} from '@types';

import {ArticlesList} from './components/articles-list';

const HomeView = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.articles.value);

  const [search, setSearch] = useState<string>('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    const fetchNewsAsync = async () => {
      await dispatch(fetchNews());
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchNewsAsync();
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(search.toLowerCase()) ||
          article.description.toLowerCase().includes(search.toLowerCase()),
      );

      setFilteredArticles(filtered);
    } else {
      setFilteredArticles([]);
    }
  }, [articles, search]);

  const onRefresh = async () => {
    setRefreshing(true);
    dispatch(await fetchNews()).then(() => setRefreshing(false));
  };

  return (
    <Flex flex={1} m={2} mb={0}>
      <InputContainer
        style={{
          borderWidth: 0,
          shadowColor: theme.colors.shadowColor,
          elevation: 3,
        }}
        onFocusStyle={{borderWidth: 2, elevation: 20}}
        leftSlot={() => (
          <Flex ml={2}>
            {search.length > 0 ? (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Icon name="cross" size="md" />
              </TouchableOpacity>
            ) : (
              <Icon name="search" size="md" />
            )}
          </Flex>
        )}>
        {({setFocused}) => (
          <InputText
            placeholder="Enter Search..."
            numberOfLines={1}
            autoCorrect={false}
            autoCapitalize="none"
            value={search}
            onChangeText={(text) => setSearch(text)}
            setFocused={setFocused}
            style={{flex: 1, paddingRight: 7, paddingLeft: 3}}
            maxLength={40}
          />
        )}
      </InputContainer>

      <Line mt={4} size="xsm" />

      <Flex m={2} my={0} flex={1}>
        {articles?.length > 0 ? (
          <ArticlesList
            articles={search.length > 0 ? filteredArticles : articles}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        ) : (
          <Box p="4">
            <EmptyState
              text="No News Found"
              bottom={
                <Flex>
                  <Flex>Pull to Refresh</Flex>
                </Flex>
              }
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export {HomeView};
