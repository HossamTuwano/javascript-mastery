var people = (function () {
  var people = ['Will', 'Buyers']

  var $el = $('#peopleModule')
  var $button = $el.find('button')
  var $input = $el.find('input')
  var $ul = $el.find('ul')
  var template = $el.find('people-template').html()

  $button.on('click', addPerson.bind(this))
  $ul.delegate('i.del', 'click', deletePerson.bind(this))

  render()
  function render() {
    // $ul.html(Mustache.render(template, { people: people }))
  }
  function addPerson(value) {
    var name = typeof value == 'string' ? value : $input.value.val()
    people.push(name)
    render()
    $input.val('')
  }

  function deletePerson(e) {
    var remove = $(e.target).closest('li')
    var i = this.$ul.find('li').index(remove)
  }

  return {
    addPerson: addPerson,
    deletePerson: deletePerson,
  }
})()
