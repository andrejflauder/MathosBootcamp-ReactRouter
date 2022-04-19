using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Space.WebApi.Models
{
    public class Star
    { 

        public int Id { get; set; } 
        public string Name { get; set; } 
        public string Location { get; set; } 

        public Star(int id, string name, string location)
        {
            Id = id;
            Name = name;
            Location = location;
        }
    }
}