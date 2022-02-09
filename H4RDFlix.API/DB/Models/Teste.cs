using Simple.DatabaseWrapper.Attributes;

namespace H4RDFlix.API.DB.Models
{
    public class Teste
    {
        [PrimaryKey]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
