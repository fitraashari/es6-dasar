generateTitle=()=> {
    return 'Judul Default'
}

createTag = (judul=generateTitle(),tag='bebas') =>{
    // tag = tag || 'tag'
    console.log('Forum '+judul+' Punya tag #'+tag)
}

createTag()