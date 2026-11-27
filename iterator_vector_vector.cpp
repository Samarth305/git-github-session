//vector of vector

#include<bits/stdc++.h>
#include<vector>
using namespace std;

void printvecvec(vector<int> v1)
{
    for(int i=0;i<v1.size();i++)
    {
        cout<<v1[i]<<" ";
    }
}
int main()
{
    vector< vector<int> > v ;
    int n,inp;
    cout<<"enter the number of inputs - ";
    cin>>n;
    for(int i=0;i<n;i++)
    {
        int x;
        cout<<"enter the number of input - ";
        cin>>x;
        v.push_back(vector<int> ());
        for(int o=0;o<x;o++)
        {
        cout<<"input - ";
        cin>>inp;
        v[i].push_back(inp);
        }
    }
    cout<<endl<<endl;
    for(int i=0;i<n;i++)
    {
        printvecvec(v[i]);
        cout<<endl;
    }
    cout<<endl<<endl;
    vector<vector<int>>::iterator it;
    it=v.begin();
    cout<<"using iterator - "<<endl<<endl;
    for(it=v.begin();it!=v.end();++it)
    {
        for(int i=0;i<(*it).size();++i)
        {
            cout<<(*it)[i]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
