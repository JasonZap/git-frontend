import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { SEARCH_USERS } from '../graphql/queries';
import {
  Box,
  Input,
  Button,
  VStack,
  HStack,
  Avatar,
  Text,
  Link,
} from '@chakra-ui/react';

type FormData = {
  search: string;
};

const UserSearch: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [searchUsers, { loading, data }] = useQuery(SEARCH_USERS, {
    skip: true,
  });

  const onSubmit = (data: FormData) => {
    searchUsers({ variables: { queryString: data.search, first: 10 } });
  };

  return (
    <VStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          <Input
            placeholder="Search users..."
            {...register('search', { required: true })}
          />
          <Button type="submit" isLoading={loading}>
            Search
          </Button>
        </HStack>
      </form>
      {data &&
        data.search.edges.map(({ node }: any) => (
          <Link key={node.id} href={node.url} isExternal>
            <HStack>
              <Avatar src={node.avatarUrl} />
              <Text>{node.login}</Text>
            </HStack>
          </Link>
        ))}
    </VStack>
  );
};

export default UserSearch;
