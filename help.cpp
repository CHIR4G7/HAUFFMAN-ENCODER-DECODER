#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
#include <unordered_map>
#include <queue>
using namespace std;

class Node
{
public:
    // char value;
    int data;
    Node *left;
    Node *right;

    Node(int data)
    {
        // this->value = value;
        this->data = data;
        this->left = NULL;
        this->right = NULL;
    }
};

class cmp
{
public:
    bool operator()(Node *n1, Node *n2)
    {
        return (n1->data > n2->data);
    }
};

void preorder(Node *root, string ds, vector<string> &ans)
{
    if (root == NULL)
    {
        return;
    }
    if (root->left == NULL && root->right == NULL)
    {
        // cout << ds << endl;
        ans.push_back(ds);
        return;
    }

    preorder(root->left, ds + '1', ans);
    preorder(root->right, ds + '0', ans);
}

vector<string> hauffman_encoding(string s)
{
    // to store the frequency of the elements
    unordered_map<char, int> frequency;
    for (int i = 0; i < s.length(); i++)
    {
        frequency[s[i]]++;
    }

    // setting up apriority queue min of Nodes with a custom comparator
    priority_queue<Node *, vector<Node *>, cmp> queue;

    // adding nodes in priority queu after creating thier nodes of the frequency of each character
    for (auto i : frequency)
    {
        Node *newnode = new Node(i.second); // this will create a node which has frequency stored that in the aray
        // cout << newnode->data << " ";
        queue.push(newnode);
    }
    // we have built a tree here
    while (queue.size() > 1)
    {
        Node *left = queue.top();
        queue.pop();
        Node *right = queue.top();
        queue.pop();
        Node *newnode = new Node(left->data + right->data);
        newnode->left = left;
        newnode->right = right;
        queue.push(newnode);
    }

    // now stroing that one node in root variable
    Node *root = queue.top();
    queue.pop();
    vector<string> ans;
    preorder(root, "", ans);
    // for(int i=0;i<ans.size();i++)
    // {
    //     cout << ans[i] << endl;
    // }
    return ans;
}

int main()
{
    string s;
    cin >> s;

    vector<string> hauffman_codes = hauffman_encoding(s);
    for (int i = 0; i < hauffman_codes.size(); i++)
    {
        cout << hauffman_codes[i] << endl;
    }

    cout << s.size() << endl;
    string k = hauffman_codes[0];
    cout << k.size();
}