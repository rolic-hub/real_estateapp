import React, { useState, useEffect } from "react"
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button} from '@chakra-ui/react'
import {useRouter,} from 'next/router'
import {MdCancel} from 'react-icons/md'
import Image from 'next/image'

import {filterData, getFilterValues } from '../utils/filterdata'




const SearchFilters = () => {
  const router = useRouter();
  const [filters, setFilters] =useState(filterData);

  const searchProperties=(filtervalues)=> {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filtervalues);

    values.forEach((item) => {
      if(item.value && filtervalues?.[item.name]){
        query[item.name] = item.value   
      }
      
    })

    router.push({pathname:path, query})
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" p="4" bg="gray.100">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
}

export default SearchFilters