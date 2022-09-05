using System.ComponentModel.DataAnnotations;

namespace API.Db.Models;

/// <summary>
/// Collection of first names to generate names from
/// </summary>
public class FirstName
{
    [Key]
    public string name { get; set; }
    
    public string meaning { get; set; }
    
    [Key]
    public string gender { get; set; }
}