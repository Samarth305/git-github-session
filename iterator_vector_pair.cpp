//vector of pair

#include<bits/stdc++.h>
#include<vector>
using namespace std;

void printvecpair(pair<int,string> p1)
{

        cout<<p1.first<<" "<<p1.second<<endl;

}
int main()
{
    vector< pair<int,string> > v ;
    int n,inp;
    cout<<"enter the number of inputs - ";
    cin>>n;
    for(int i=0;i<n;i++)
    {
        int x;
        cout<<"enter the first integer input - ";
        cin>>x;
        string s;
        cout<<"enter second string input - ";
        getline(cin,s);
        v[i]={x,s};

    }
    cout<<endl<<endl;
    for(int i=0;i<n;i++)
    {
        printvecpair(v[i]);
        cout<<endl;
    }
    cout<<endl<<endl;
    vector<pair<int,string>>::iterator it;
    it=v.begin();
    cout<<"using iterator - "<<endl<<endl;
    for(it=v.begin();it!=v.end();++it)
    {


            cout<<(*it).first<<" "<<(*it).second;

        cout<<endl;
    }
    return 0;
}
