export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('index'),
      this.toRoute('new'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
}
