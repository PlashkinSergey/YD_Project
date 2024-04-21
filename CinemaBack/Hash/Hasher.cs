using System.Security.Cryptography;
using System.Text;

namespace CinemaBack.Hash
{
    public class Hasher
    {
        private readonly string _password;
        public Hasher(string password) 
        {
            this._password = password;
        }

        public string GetHash()
        {
            MD5 md5 = MD5.Create();
            byte[] bytes = Encoding.ASCII.GetBytes(_password);
            byte[] hashs = md5.ComputeHash(bytes);
            StringBuilder sb = new StringBuilder();
            foreach (byte hash in hashs)
            {
                sb.Append(hash.ToString("X2"));
            }
            return sb.ToString();
        }
    }
}
