import React, { useState } from 'react'
import { FormControl, InputLabel, Input, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchComponent = (props: {text: String, setText: Function}) => {
  // const [searchText, setSearchText] = useState('')
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setText(e.target.value)
  }

  return (
    <FormControl variant="standard">
    <InputLabel htmlFor="input-with-icon-adornment">
      Поиск
    </InputLabel>
    <Input
      id="input-with-icon-adornment"
      value={props.text}
      onChange={handleChangeSearch}
      endAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
    />
  </FormControl>
  )
}

export default SearchComponent