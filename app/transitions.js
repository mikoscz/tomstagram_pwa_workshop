export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('index'),
      this.toRoute('new'),
      this.use('toLeft', { duration: 200 }),
      this.reverse('toRight', { duration: 200 })
    );
}
