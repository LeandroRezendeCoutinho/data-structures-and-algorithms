
namespace DataStructures
{
    class CustomStack
    {
        private Stack<int> _stack = new Stack<int>();

        public void push(int item)
        {
            _stack.Push(item);
        }

        public int pop()
        {
            return _stack.Pop();
        }

    }

}
