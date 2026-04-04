//vector

#include<bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> v;
    int n,inp;
    cout<<"enter the number of inputs - ";
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cout<<"enter the input - ";
        cin>>inp;
        v.push_back(inp);
    }
    cout<<endl<<endl;
    for(int i=0;i<n;i++)
    {
        cout<<v[i]<<" ";
    }
    cout<<endl<<endl;
    vector<int>::iterator it;
    it=v.begin();
    cout<<"using iterator - "<<endl;
    for(it;it!=v.end();++it)
    {
        cout<<(*it)<<" ";
    }
    return 0;
}
