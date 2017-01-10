import React from 'react'
import { List, ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'

export default function (suggestions) {
  return (
    <div>
      <TextField
        recycle='searchInput'
        id='searchInput'
        placeholder='Find GitHub Login'
        onChange={e => e.target.value}
      />
      <List>
        {suggestions.map((item, i) => <ListItem key={i} primaryText={item.login} />)}
      </List>
    </div>
  )
}
