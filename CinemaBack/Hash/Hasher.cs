using System.Security.Cryptography;
using System.Text;

namespace CinemaBack.Hash
{
    public class Hasher
    {
        private readonly string _password;
        private readonly MD5 _md5;
        public Hasher(string password) 
        {
            this._password = password;
            _md5 = MD5.Create();
        }

        public string GetHash()
        {
            byte[] bytes = Encoding.ASCII.GetBytes(_password);
            byte[] hashs = _md5.ComputeHash(bytes);
            StringBuilder sb = new StringBuilder();
            foreach (byte hash in hashs)
            {
                sb.Append(hash.ToString("X2"));
            }
            return sb.ToString();
        }
    }
}
