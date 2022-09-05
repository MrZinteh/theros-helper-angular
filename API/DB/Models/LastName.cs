using System.ComponentModel.DataAnnotations;

namespace API.Db.Models;

/// <summary>
/// Collection of last names to generate names from
/// </summary>
public class LastName
{
    /// <summary>
    /// Surname
    /// </summary>
    [Key]
    public string lastname { get; set; }
    
    /// <summary>
    /// Meaning of surname
    /// </summary>
    public string meaning { get; set; }
}