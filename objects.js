var playlist = {oliverTree:"alien boy"}

function updatePlaylist(playlist, name, title) {
  var new_obj = playlist[name] = title
  return new_obj
}